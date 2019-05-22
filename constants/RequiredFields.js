const requiredFields = [
    { field: 'id'},
    { field: 'imp'},
    {  obj: 'imp', field: 'id'},
    {  obj: 'app', field:'id'},
    {  obj: 'device', field:'os'},
]

module.exports = requiredFields;