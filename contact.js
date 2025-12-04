let contactDatabase=[
{
    firstName:"John",
    lastName:"Green",
    email:"john@mail.com",
    favorite:true,
    priority:5
},
{
    firstName:"Mary",
    lastName:"Green",
    email:"mary@mail.com",
    favorite:false,
    priority:1
},
{
    firstName:"Harry",
    lastName:"Blue",
    email:"harry@supermail.com",
    favorite:false,
    priority:2 
},
{
    firstName:"Charles",
    lastName:"King",
    email:"charlie@manmail.com",
    favorite:true,
    priority:4  
},
]
// reusuable functionalities
function displayContactlist(){
        for (let c of contactDatabase) {
        console.log(c.firstName,c.lastName, "("+c.email+")");
        console.log("Priority:",c.priority, "Favourite:",c.favorite)
        console.log()
    }
}
//function is a reusable chunk of code

function addNewContact(contactDatabase,fname, lname, email, fave, pri){
    let newContact = {
        firstName:fname,
        lastName:lname,
        email:email,
        favorite:fave,
        priority:pri
    }
    //add new contact to the back of the array
    contactDatabase.push(newContact);
}




function deleteContactByEmail(contactDatabase,email){
  // from email address, find the index of the contact that we want to delte
  //use linear search
  let wantedIndex = null;
  for (let i = 0; i < contactDatabase.length; i++){
    let currentContact = contactDatabase[i];
    if (currentContact.email == email){
        wantedIndex = i;
        break;
    }
  } 
   contactDatabase.splice(wantedIndex,1);
};

addNewContact(contactDatabase,"Sherry","Lady","lady@femail.com",true,5);


deleteContactByEmail(contactDatabase,"harry@supermail.com")
displayContactlist();