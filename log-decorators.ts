export const logClass = (target: any) => {
  console.log('logClass -> ', target);
  return target;
}

export const logMethod = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
  console.log(`logMethod -> ${target}.${propertyKey}.${descriptor}`);
}

export const logProperty = (target: Object, propertyKey: string) => {
  console.log(`logProperty -> ${target}.${propertyKey}`);
}

export const logParam = (target: Object, propertyKey: string, parameterIndex: number) => {
  console.log(`logParam -> ${target}.${propertyKey}.${parameterIndex}`);
}
