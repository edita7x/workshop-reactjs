import React from 'react'
import SearchBar from '../components/SearchBar';
import Bloglist from '../components/Bloglist';

const link = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";
class App extends React.Component {
    constructor(){
        super()
        this.state ={
            loading: true,
            blogs: [],
            blogsFiltered: []
        }
    }

    /*componentDidMount(){
        this.setState({loading: false})
    }*/
    componentDidMount(){
        this.handleGetBlog()
    }

    handleTypeSearch= event=>{

            const filteredblogs = this.state.blogs.filter((blog) => {
             return blog.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
            });
        this.setState({blogsFiltered: filteredblogs})
        console.log(event.target.value);
    };

    handleGetBlog = () => {
        fetch(link)
            .then(res => res.json())
            .then(res => this.setState({blogs: res, blogsFiltered: res}))
    }

    render(){

        console.log(this.state.blogsFiltered)

        return(

            //<h1>Loading : {JSON.stringify(this.state.loading)}</h1>//
            <div>
            <SearchBar
                onChangeSearch={this.handleTypeSearch}/>
                {this.state.blogsFiltered.map((blogs, index) =>
                <Bloglist
                    key={index}
                    title={blogs.title}
                    content={blogs.content}
                    author={blogs.author}
                    date={blogs.created_at}
                />)}
            </div>
        )
    }
}

export default App
