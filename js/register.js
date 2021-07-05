$(document).ready(function () {
    const changeMsgInput = (item, addOrRemove, index, msg) => {
        item.next().text(msg);
        addOrRemove ? item.next().addClass('text-success') : item.next().removeClass('text-success');
        checkSubmit[index] = addOrRemove;
    }
    let firstname = $('#firstname');
    let lastname = $('#lastname');
    let uname = $('#uname');
    let email = $('#email');
    let pwd = $('#pwd');
    let pwdc = $('#pwdc');
    $('form :input').val('');
    let btnRegister = $('#btnRegister');
    const fNameReg = {
        value: /^[A-Za-z]+$/,
        successMsg: 'Firstname is valid',
        failMsg: 'First Name is invalid'
    };
    const lNameReg = {
        value: /^[A-Za-z]+$/,
        successMsg: 'Lastname is valid',
        failMsg: 'Last Name is invalid'
    };
    const unameReg = {
        value: /^[A-Za-z0-9]+$/,
        successMsg: 'Username is valid',
        failMsg: 'User Name is invalid'
    };
    const emailReg = {
        value: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        successMsg: 'Email is valid',
        failMsg: 'Email is invalid'
    };
    const pwdReg = {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        successMsg: 'Password is valid',
        failMsg: 'Password contain at least 8 character, 1 number'
    };
    const pwdcReg = {
        value: '',
        successMsg: 'Password matches',
        failMsg: 'Password not matches'
    }
    const listInput = [firstname, lastname, uname, email, pwd, pwdc];
    const arrRegex = [fNameReg, lNameReg, unameReg, emailReg, pwdReg, pwdcReg]
    const checkSubmit = [false, false, false, false, false, false];
    function validateInputForm() {
        listInput.map((item, index) => {
            let timeOut = null;
            item.keyup(function () {
                clearTimeout(timeOut);
                timeOut = setTimeout(() => {
                    if (item != pwdc) {
                        arrRegex[index].value.test(item.val()) ? changeMsgInput(item, true, index, arrRegex[index].successMsg) :
                            changeMsgInput(item, false, index, arrRegex[index].failMsg);
                    } else {
                        (item.val() == pwd.val()) ? changeMsgInput(item, true, index, arrRegex[index].successMsg) :
                            changeMsgInput(item, false, index, arrRegex[index].failMsg);
                    }
                    if (item == pwd) {
                        let indexPwdc = listInput.indexOf(pwdc);
                        (item.val() == pwdc.val()) ? changeMsgInput(pwdc, true, indexPwdc, arrRegex[indexPwdc].successMsg) :
                            changeMsgInput(pwdc, false, indexPwdc, arrRegex[indexPwdc].failMsg);
                    }
                }, 500);
            });
        });
    }
    btnRegister.on('click', (e) => {
        if (checkSubmit.indexOf(false) > -1) {
            listInput.map((item, index) => {
                if (!checkSubmit[index]) {
                    if(item == pwdc && pwd.val() == '' && pwdc.val() == ''){
                        changeMsgInput(item, false, index, '');
                    }else{
                        changeMsgInput(item, false, index, arrRegex[index].failMsg);
                    }
                }
            });
            e.preventDefault();
        }
        else {
            $('#forms').submit()
        }
    });
    validateInputForm();
});
