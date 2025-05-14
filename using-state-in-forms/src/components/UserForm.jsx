import { useState } from 'react';


function UserForm() {
    const [formData, setFormData] = useState({
     name: "",
     email: "",
     feedback: ""
    });
   
    const handleChange = (e) => {
     const { name, value } = e.target;
     console.log(`Updating ${name}:`, value);
     setFormData((prevData) => ({
       ...prevData,
       [name]: value,
     }));
    };

    const handleSubmit = (e) => {
      
      alert("Form submitted !!!!! WOOOOOOOOOOOOOOO");
      console.log("Form submitted:", formData);
    };
   
    return (
     <div id = "form">
       <h1>User Form</h1>
       <form onSubmit={handleSubmit}>
         <label>
           Name:
           <input
             type="text"
             name="name"
             value={formData.name}
             onChange={handleChange}
           />
         </label>
         <br />
         <label>
           Email:
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
           />
         </label>
         <br />
         
         <label>
           Feeback max 200 characters:
           <textarea
            id = "input"
             type="textarea" 
             wrap = "soft"
             name="feedback"
             value={formData.feedback}
             onChange={handleChange}
             maxLength={200}
           />
         </label>
         
<input type="submit" value="Submit"></input>

       </form >
       <h2 id = "preview">Preview</h2>
       <p>Name: {formData.name}</p>
       <p>Email: {formData.email}</p>
       <p>Feedback: {formData.feedback}</p>
       
     </div>
    );
   }
  

   
   
   export default UserForm;