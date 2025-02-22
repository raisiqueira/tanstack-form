export type ValidationError = undefined | false | null | string

// If/when TypeScript supports higher-kinded types, this should not be `unknown` anymore
export type Validator<Type, Fn = unknown> = () => {
  validate(options: { value: Type }, fn: Fn): ValidationError
  validateAsync(options: { value: Type }, fn: Fn): Promise<ValidationError>
}

export type ValidationCause = 'change' | 'blur' | 'submit' | 'mount'

export type ValidationErrorMapKeys = `on${Capitalize<ValidationCause>}`

export type ValidationErrorMap = {
  [K in ValidationErrorMapKeys]?: ValidationError
}
