import {
  PERMISSION_ALL,
  PERMISSION_READ,
  PERMISSION_WRITE,
  PERMISSION_DELETE,
  MODULE_USER,
  ROLE_OF_TRAINER,
  ROLE_OF_TRAINEE,
  ROLL_OF_HEAD_TRAINER
} from "../constant";

import { IHasPer } from "../interfaces";

const PERMISSION = {
  [MODULE_USER]: {
    [PERMISSION_ALL]: [ROLL_OF_HEAD_TRAINER],
    [PERMISSION_READ]: [ROLE_OF_TRAINEE, ROLE_OF_TRAINER],
    [PERMISSION_WRITE]: [ROLE_OF_TRAINER],
    [PERMISSION_DELETE]: []
  }
};

let hasPermission: IHasPer;

hasPermission = (module_Name, role, permissionType) => {

  if(PERMISSION[module_Name] === undefined){
    return false;
  }

if(PERMISSION[module_Name][permissionType] === undefined){
    return false;
  }

if(PERMISSION[module_Name][permissionType].includes(role) === false ) {
  return false;
}

 return true;
}


export default hasPermission;
