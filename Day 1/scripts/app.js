function showMenu() {
        document.getElementById("appmenu").style.display = 'block';
    }
function hideMenu() {
    document.getElementById("appmenu").style.display = 'none';
}

var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];


function showList() {
    var myTable = '<table border="1" class="table table-striped"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Actiune1</th><th>Actiune2</th></tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td><button onclick="vizualizare('+i+')">vizualizare</button></td><td><button onclick="del('+i+')">delete</button></td></tr>';
    }

    var des,nr,cifre,avg;
    myTable += '<tr><td>'+des+'</td><td>'+nr+'</td><td>'+cifre+'</td><td>'+avg+'</td></tr>';
    myTable += '</table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;

    //var hash={nume,nr_aparitii};
}

function del(a){
    for(var i in employeesList){
        if(a==i) employeesList.splice(a,1);
        showList();
    }
}
function vizualizare(a){
     for(var i in employeesList){
         if(a==i) alert(employeesList[i].firstName+' '+employeesList[i].lastName+' '+employeesList[i].phone+' '+employeesList[i].salary);
     }
}


function showSum(){
    var sum = 0;
    for(var i in employeesList) {
        sum+=employeesList[i].salary;
    }
    var elem = document.getElementById('suma');
    elem.innerHTML = sum;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone,
        salary));

showList();

}
function deleteEmployee(){
    employeesList.pop();

    showList();
}



