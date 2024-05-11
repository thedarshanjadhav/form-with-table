import { useState } from 'react'

import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    number:''
  });

  const [tableData, setTableData] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev)=> ({
      ...prev, 
      [name]: value
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setTableData((prev)=>[...prev, formData]);
    setFormData({name:'', email:'', number:''})
  }

  console.log(tableData)

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name='name' value={formData.name} onChange={handleChange}/>
      <label htmlFor="email">Email</label>
      <input type="email" name='email' value={formData.email} onChange={handleChange}/>
      <label htmlFor="">Number</label>
      <input type="text" name='number' value={formData.number} onChange={handleChange}/>
      <button type='submit'>Submit</button>
    </form>
    <table style={{border:'2px solid black', gap:4}}>
      <tr>
        <th>Name</th>
        <th>email</th>
        <th>Number</th>
      </tr>
     
      {tableData && tableData.map((data, index)=>(

        <tr key={index}>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.number}</td>
        </tr>
      ))}
    </table>

    
    </>
  )
}

export default App
