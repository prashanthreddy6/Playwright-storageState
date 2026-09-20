import dotenv from 'dotenv';

dotenv.config();

export const userDetails={
    userName:process.env.USER_NAME,
    password:process.env.PASSWORD
} 

export const BaseUrl=process.env.BASE_URL