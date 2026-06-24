const fullName = document.getElementById("full-name")
const form = document.getElementById("form")
const email = document.getElementById("email")
const orderNo = document.getElementById("order-no")
const productCode = document.getElementById("product-code")
const quantity = document.getElementById("quantity")
const complaintsGrp = document.getElementById("complaints-group")
const complaintDesc = document.getElementById("complaint-description")
const solutionGrp = document.getElementById("solutions-group")
const solutionDesc = document.getElementById("solution-description")
const otherComplaint = document.getElementById("other-complaint")
const otherSolution = document.getElementById("other-solution")

const checkFullName = () => fullName.value.trim() !== ""
const checkEmail = () => /^[a-zA-Z0-9+]+@[a-z]+\.[a-zA-Z.]+/.test(email.value)
const checkOrderNo = () => /^2024\d{6}$/.test(orderNo.value)
const checkProdCode = () => /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCode.value)
const checkQuantity = () => {
    const n = Number(quantity.value)
    return quantity.value !== "" && Number.isInteger(n) && n > 0
}

const checkComplaintsGroup = () =>
    [...complaintsGrp.querySelectorAll("input[type='checkbox']")].some((c) => c.checked)


const checkComplaintDescription = () => !otherComplaint.checked || complaintDesc.value.length >= 20

const checkSolution = () =>
    [...solutionGrp.querySelectorAll("input[type='radio']")].some((r) => r.checked)

const checkSolutionDescription = () => {
    if (otherSolution.checked == true && solutionDesc.value.length >= 20) {
        return true
    }
    else if (otherSolution.checked == false && solutionDesc.value.length <= 20) {
        return true
    }
    else if (otherSolution.checked == true && solutionDesc.value.length <= 20) {
        return false
    }
}

function validateForm() {
    return {
        "full-name": checkFullName(),
        "email": checkEmail(),
        "order-no": checkOrderNo(),
        "product-code": checkProdCode(),
        "quantity": checkQuantity(),
        "complaints-group": checkComplaintsGroup(),
        "complaint-description": checkComplaintDescription(),
        "solutions-group": checkSolution(),
        "solution-description": checkSolutionDescription(),
    }
}

function isValid(result) {
    return Object.values(result).every(Boolean)
}

const setBorder = (el, valid) => {
    el.style.borderColor = valid ? "green" : "red";
}

fullName.addEventListener("change", () => setBorder(fullName, checkFullName()));
email.addEventListener("change", () => setBorder(email, checkEmail()))
orderNo.addEventListener("change", () => setBorder(orderNo, checkOrderNo()))
productCode.addEventListener("change", () => setBorder(productCode, checkProdCode()))
quantity.addEventListener("change", () => setBorder(quantity, checkQuantity()))
complaintsGrp.addEventListener("change", () => setBorder(complaintsGrp, checkComplaintsGroup()))
complaintDesc.addEventListener("change", () => setBorder(complaintDesc, checkComplaintDescription()))
solutionGrp.addEventListener("change", () => setBorder(solutionGrp, checkSolution()))
solutionDesc.addEventListener("change", () => setBorder(solutionDesc, checkSolutionDescription()))

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const result = validateForm()
    if (!isValid(result)) {
        setBorder(fullName, result["full-name"])
        setBorder(email, result["email"]);
        setBorder(orderNo, result["order-no"]);
        setBorder(productCode, result["product-code"]);
        setBorder(quantity, result["quantity"]);
        setBorder(complaintsGrp, result["complaints-group"]);
        setBorder(complaintDesc, result["complaint-description"]);
        setBorder(solutionGrp, result["solutions-group"]);
        setBorder(solutionDesc, result["solution-description"]);
    }
})

// const complaintBox = document.getElementById("complaint-description-container");
// const solutionBox = document.getElementById("solution-description-container");

// // hide both at the start
// complaintBox.style.display = "none";
// solutionBox.style.display = "none";

// // complaint "Other" is a checkbox — listen on it directly
// otherComplaint.addEventListener("change", () => {
//     complaintBox.style.display = otherComplaint.checked ? "block" : "none";
// });

// // solution "Other" is a radio — picking another radio unchecks it,
// // so listen on the whole group and re-check each time
// solutionGrp.addEventListener("change", () => {
//     solutionBox.style.display = otherSolution.checked ? "block" : "none";
// });

const complaintBox = document.getElementById()