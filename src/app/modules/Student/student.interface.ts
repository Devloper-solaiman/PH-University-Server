import { Model, Types } from 'mongoose';


// ValidationError: profileImg: Cast to string failed for value \"{}\" (type Object) at path \"profileImg\""
// stack
// : 
// "Error: ValidationError: profileImg: Cast to string failed for value \"{}\" (type Object) at path \"profileImg\"\n    at C:\\typescript-technocrat\\PH-university\\L2B2-PH-university-server\\src\\app\\modules\\User\\user.service.ts:100:11\n    at Generator.next (<anonymous>)\n    at fulfilled (C:\\typescript-technocrat\\PH-university\\L2B2-PH-university-server\\src\\app\\modules\\User\\user.service.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)





export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  admissionSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  academicFaculty: Types.ObjectId;
  isDeleted: boolean;
};

//for creating static
export interface StudentModel extends Model<TStudent> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<TStudent | null>;
}
