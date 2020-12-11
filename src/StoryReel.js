import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://image.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg"
                profileSrc="https://image.freepik.com/free-vector/app-development-illustration_23-2148690800.jpg"
                title="Development"
            />
            <Story 
                image="https://image.freepik.com/free-vector/vector-pop-art-illustration-brutal-bearded-man-macho-with-tatoo_1441-376.jpg"
                profileSrc="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                title="Marketing"
            />
            <Story 
                image="https://image.freepik.com/free-vector/pop-art-young-woman-cartoon_18591-52671.jpg"
                profileSrc="https://image.freepik.com/free-vector/isometric-concept-web-er-illustration-website-layout-design_71983-1485.jpg"
                title="Services"
            />
            <Story 
                image="https://image.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148217001.jpg"
                profileSrc="https://image.freepik.com/free-vector/isometric-online-education-concept_52683-8896.jpg"
                title="Deployment"
            />
            <Story 
                image="https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
                profileSrc="https://image.freepik.com/free-vector/various-tools-objects-online-education-home-isometric-concept-3d-vector-illustration_1284-29985.jpg"
                title="Creation"
            />
        </div>
    )
}

export default StoryReel

