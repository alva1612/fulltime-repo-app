import {
  ClassSerializerInterceptor,
  UseInterceptors,
  applyDecorators,
} from '@nestjs/common';

export function useClassSerializer() {
  return applyDecorators(UseInterceptors(ClassSerializerInterceptor));
}
