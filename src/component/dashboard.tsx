import React, { useEffect, useState } from 'react'
type Cat ={
    id: number;
    name: string;
}

const Dashboard = ({callback}) => {
    const [cat, setCat]=useState <Cat[]>([])
    const [parameter, setParameter]= useState({ 
        totalQuestion: 5,
        categories: 9,
        difficulty:"easy",
     })
    const fetchCat=async()=>{
        const {trivia_categories}= await (await fetch(`https://opentdb.com/api_category.php`)).json();
        setCat(trivia_categories);
    }
useEffect(()=>{ fetchCat()},[])
const handle=(e:any)=>{
e.preventDefault();
setParameter({
    ...parameter,
    [e.target.name]: e.target.value,
})
}

    return (
        <div className="container">
            <div className="box">
                <h1>Set Quiz Settings</h1>
                <div className="settings">
                    <input
                        type="text" 
                        placeholder="Enter Nuumber of Question" 
                        onChange={handle} 
                        name="totalQuestion"
                        autoComplete="off"
                            />
                    <select onChange={handle} name="categories">
                        <option value="Select Categories">Select Categories</option>
                        {cat.map((categ)=>(
                            <option value={categ.id} key={categ.id}>{categ.name}</option>
                        ))}
                    </select>
                    <select name="difficulty" onChange={handle}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <button onClick={(e)=>callback(e, parameter)}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
