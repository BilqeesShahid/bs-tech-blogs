import { Rule } from "sanity";

export const author = {
  name: "author",
  title: "Author",
  type: "document",

  fields: [
    {
      name: "name",
      type: "string",
      title:"AuthorName",
    },
    {
      name:"bio",
      type:"text",
      title:"Bio",

    },
    {
      name:"image",
      type:"image",
      title:"Image",
      options:{
        hotspot:true,
      }

    }
  ]
}