import { useState} from 'react'

function Age({calculateAge})
{
    const [birthday , setBirthday] = useState('');

    {console.log(birthday)}
    const handleChange = (val) =>{
        setBirthday(val.target.value);
    }

    const handleSubmit = (ele)=>{
        ele.preventDefault();
        calculateAge(birthday);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}> 
            <input style={{padding:"5px", marginTop :"3px" , marginBottom :"3px"}} type="date" value={birthday} onChange={handleChange} /><br />
            <button style={{backgroundColor : "#00B0FF" , color : "White", padding : "10px", border: "0px", borderRadius : "5px", marginTop : "15px", fontSize: "15px"}} type='submit'>Calculate Age</button>
            </form>
        </div>
    )
}

export default Age;