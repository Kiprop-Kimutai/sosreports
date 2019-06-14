   function getLocaleDateString(date){
        return new Date(date).toLocaleDateString();
    }
    
    function getHouseHoldhead(members) {
        return members[0].name
    }
    
    function getPartner(cases) {
        return cases[0].partner.partner;
    }