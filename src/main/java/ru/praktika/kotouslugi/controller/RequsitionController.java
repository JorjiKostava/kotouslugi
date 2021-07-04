package ru.praktika.kotouslugi.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.praktika.kotouslugi.controller.service.RequsitionService;
import ru.praktika.kotouslugi.model.Requisition;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/requisition")
public class RequsitionController {
   @Autowired
   RequsitionService requsitionService;


    @RequestMapping(value = "listRequisition",method = RequestMethod.POST,
            produces = "application/json")
    public List<Requisition> listRequisition(){

        return requsitionService.listRequisition();
    }

    @RequestMapping(value = "createRequisition",method = RequestMethod.POST,
            produces = "application/json")
    public Integer createRequisition(
            @RequestBody Map<String,Object> request){
        return requsitionService.creatRequisition(request);
    }


    @RequestMapping(value = "updateRequisition",method = RequestMethod.POST,
            produces = "application/json")
    public Boolean updateRequisition(@RequestBody Map<String,Object> request){
        return requsitionService.updateRequisition(request);
    }

}
