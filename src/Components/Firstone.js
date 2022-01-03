import React, {useState} from 'react';
import './styling.css';

const Firstone = () => {

    const[name ,setName] = useState("");
    const[department ,setDepartment] = useState("");
    const[rating ,setRating] = useState("");
    const[whole,setwhole] = useState([]);
    const[content, setContent] = useState(true);

    
    const handleSubmit = (details) =>{
        details.preventDefault();

        const info = {name , department , rating}

        if(name && department && rating){
            setwhole((total) => [...total, info])
            setName("")
            setDepartment("")
            setRating("")
            setContent(false)
        }
    }


    return (
        <div className="firstbox">
        
            
             {content ?      
                <>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name : </label>
                        <input type="text" name="name" id="name" value={name} onChange={ (details) => setName(details.target.value) }/><br/>

                    <label>Department :</label>
                        <input type="text" name="department" id="department" value={department} onChange={ (details) => setDepartment(details.target.value) }/><br/>

                    <label>Rating : </label>
                        <input type="number" name="rating" id="rating" value={rating} onChange={(details) => setRating(details.target.value) }/><br/>

                    <input type="submit" id="submit" value="SUBMIT"/>
                </form>
                </>:
                <>
                <h1>EMPLOYEE FEEDBACK DATA</h1>
                <div className="div1">
                    {
                        whole.map((child) => 
                            <div className='Information'>
                                Name : {child.name} | Department : {child.department} | Rating : {child.rating}
                            </div>    
                        )
                    }
                </div>
                <button className="button" onClick={ ()=> setContent(true) }>GO BACK</button>
                </>
             }  
        </div>   
    )
}

export default Firstone