/*
    THESE ARE THE INSTRUCTIONS ON HOW THE DSL IS BUILT AND PARSED FOR BUILDING RENDER OBJECT

    Assuming we have these custom components defined by the admin and with a small description of what they are
        
        Preview Image                                   |       Is an image that previews the newsletter
                                                        |
        Subject line                                    |       Subject line of the nesletter
                                                        |
        Company Info:                                   |       Section is link to website
            Company logo                                |       Company logo placed on left of section of this section
            Company Details                             |       Company details on the right most side of section
                Company name                            |       Company name placed on top of top of this sectionsection
                Number of followers                     |       company followers placed on the bottom of this section
                                                        |
        Release date                                    |       Publish date
                                                        |
        Header                                          |       Quite chunky header with a mixture of short descriptions
                                                        |
        Short Description:                              |       A mixture of simple text, links and what not
            Links                                       |
            Formatted Text                              |
                                                        |
        BlogPost:                                       |       Content of blog posts
            Category Name                               |
            Short Description                           |
            Link To Post                                |
                                                        |
        Blog Posts                                      |       A list of blog posts
        Company Ads                                     |       A list of internal advertisements base on deals as short descriptions

        The llm is going to be fed with these template rules (for a newsletter specifically.) Not all the fields listed above are going to be fed.
        Only the relevant ones that the llm will use to generate text input are going to be used:
            - First the extended formats (formats that are goin to be re-uesd often): Short description
            - Then, the sections of the template to write upon: Subject line, Release date, header, blog posts, company ads.

        With these criteria in mind, chat-gpt will generate a newsletter that follows and (most importantly) highlights, more or less, the section
        templates. This original data is very compact; meaning that it is serialized and needs to be parsed into the Render Object that is then 
        used to build a content template that is rendered on screen.
        

        The format of the general company newsletter template looks like this, in the DSL, based on the above possible category names that the
        Admin decides:

        [External]:
            [PreviewImage]

            [SubjectLine]

            [CompanyInfo]:
                [CompanyLogo]
                [CompanyDetails]:
                    [CompanyName]
                    [NumberOfFollowers]

            [ReleaseDate]

            [Header]

        [Internal]:
            
            [BlogPosts]:[
                [BlogPost]:
                    [CategoryName]

                    [ShortDescription]:
                        <[Links]
                        [FormattedText]>

                    [LinkToPost]
            ]
            
            [CompanyAds]:[
                {ShortDescription}
                {SHortDescription}
            ]

        
        The render object after parsing is initiated on the plain text response could be of the form

        T(root) ->
                    T(external) 
                               -> T(subject line)
                               -> T(release date)
                               -> T(header) 
                                            -> T(short description)
                                            -> T(short description)
                                            -> T(short description)
                                            .
                                            .
                                            .
                                            -> T(<li>...</li>) // If the parser encounters a template string that is not predefined for this section but
                                                               // follows the pattern nof a base template (lists in our case), it renders that template instead
                                            ...
                                            -> T(<others>) // If the template string does not follow any of the base templates, it will render in a container as
                                                           // literal string
                -> T(internal) 
                                -> T(blog posts) // list is in order of appearance
                                                 -> T(<p>...</p>)
                                                 -> T(blog post)
                                                 -> T(blog post)
                                                 .
                                                 .
                                                 .
                                                 -> T(<q>...</q>) // Closing could be a quote

                                -> T(company ads)
                                                 -> T(<p>Nothing interesting happening this week</p>) // Example case where there is no advertisement for this week
            

        For this parsing to be made great, the text response should have some preflight flags to identify main sections written on and proper identing rules to differentiate
        the different subsections (for example, in blog posts list, go to new line before starting a new blogpost section to differentiate between posts)

        The essence is that each of the sections defined by the admin are just combos of the base components of the web defined in the notes.md file. These core components,
        when stylized and combined, give the custom components defined by the admin. Which brings us to the next part of our discussion; STYLING 

*/
