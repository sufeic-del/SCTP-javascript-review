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
displayContactlist();
displayContactlist();

function addNewContact(contactDatabase,fname, lname, email, favorite, priority){
    let newContact = {
        firstName:fname,
        lastName:lname,
        email:email,
        favorite:favorite
        priority:priority
    }
    //add new contact to the back of the array
    contactDatabase.push(newContact)
}

addNewContact(contactDatabase,"Sherry","Lady","lady@femail.com",true,5);
displayContactlist();