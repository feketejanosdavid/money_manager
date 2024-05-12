const Doc = {
    IncomeBody: document.getElementById('IncomeBody'),
    ExpenseBody
}

const State = {
    incomesURL: "http://localhost:8000/incomes",
    expensesURL: "http://localhost:8000/expenses"
}

function getIncomes() {
    fetch(State.incomesURL).then(Response => Response.json()).then(result => {
        console.log(result);
        renderIncomes(result)
    })
}

function getExpenses() {
    fetch(State.expensesURL).then(Response => Response.json()).then(result => {
        console.log(result);
        renderExpenses(result)
    })
}

function renderIncomes(incomeList) {
    incomeList.forEach(data => {
        var row = document.createElement('tr')
        row.innerHTML = `
        <td>${data.id}</td>
        <td>${data.date}</td>
        <td>${data.type}</td>
        <td>${data.amount}</td>
        `
        Doc.IncomeBody.appendChild(row)
    });
}

function renderExpenses(expenseList) {
    expenseList.forEach(data => {
        var row = document.createElement('tr')
        row.innerHTML = `
        <td>${data.id}</td>
        <td>${data.date}</td>
        <td>${data.type}</td>
        <td>${data.amount}</td>
        `
        Doc.ExpenseBody.appendChild(row)
    })
}

function getDatas() {
    getIncomes();
    getExpenses();
}


getDatas()