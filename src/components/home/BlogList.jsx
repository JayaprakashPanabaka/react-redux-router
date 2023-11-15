import React ,{useState, useEffect} from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {
    const [blogsData, setBlogsData] = useState([])

    let url = 'https://apis.ccbp.in/blogs'

    const fetchBlogsData = async() => {
        const response = await fetch(url)
        const jsonData = await response.json()
        // console.log(jsonData);

        const updatedData = jsonData.map((item) => {
         return ({ 
            id: item.id,
            title: item.title,
            topic: item.topic,
            author: item.author,
            imageUrl: item.image_url,
            avatarUrl: item.avatar_url
         })})

        // console.log(updatedData);
        setBlogsData(updatedData)
    }

    useEffect(()=> {
        fetchBlogsData();
    }, [])

  return (
    <div>
      {
        blogsData.map((blog) => {
            return <BlogItem key={blog.id} blogData ={blog} />
        })
      }
    </div>
  )
}

export default BlogList
