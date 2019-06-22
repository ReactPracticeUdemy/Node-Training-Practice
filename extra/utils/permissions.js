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

const PERMISSION = {
  [MODULE_USER]: {
    [PERMISSION_ALL]: [ROLL_OF_HEAD_TRAINER],
    [PERMISSION_READ]: [ROLE_OF_TRAINEE, ROLE_OF_TRAINER],
    [PERMISSION_WRITE]: [ROLE_OF_TRAINER],
    [PERMISSION_DELETE]: []
  }
};

export const hasPermission = (module_Name, role, permissionType) => {
  console.log(module_Name, role, permissionType);
  if(PERMISSION[module_Name] === undefined){
    return false;
  }

  if(PERMISSION[module_Name][permissionType] === undefined){
    return false;
  }

  if(PERMISSION[module_Name][permissionType].includes(role) === false ) {
    return false;
  }

    if(PERMISSION[module_Name] !== undefined && role == "head-trainer") {
        return true
    }

 return true;
}


