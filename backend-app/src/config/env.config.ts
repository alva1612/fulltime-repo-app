import * as joi from 'joi';

export const ENV = () => ({
  BASE_URL: process.env.BASE_URL,
});
export enum EnvKey {
  BASE_URL = 'BASE_URL',
}
export const EnvSchema = joi.object({
  BASE_URL: joi.string().uri(),
});
