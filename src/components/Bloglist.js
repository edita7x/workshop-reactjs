import React from 'react'

const Bloglist = props => {
    return(
        <div>
            <h1 style={styles.what}>{props.title}</h1>
            <p style={styles.the}>{props.content}</p>
            <p style={styles.heck}>{props.author}</p>
            <p style={styles.bruh}>{props.date}</p>
        </div>
    )
}
const styles ={
    what:{
        textAlign: "center"
    },
    the: {
        backgroundColor: "Yellow",
        textAlign: "Justify"
    },
    heck:{
        backgroundColor: "Yellow",
        backgroundColor: "blue",
    },
    bruh:{
        backgroundColor: "Yellow",
        backgroundColor: "pink"
    }
}


export default Bloglist;
