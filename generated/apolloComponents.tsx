import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
   __typename?: 'Query';
  me?: Maybe<User>;
  hello: Scalars['String'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  userName: Scalars['String'];
  email: Scalars['String'];
  profileImg: Scalars['String'];
  html: Scalars['Boolean'];
  css: Scalars['Boolean'];
  js: Scalars['Boolean'];
  react: Scalars['Boolean'];
  vue: Scalars['Boolean'];
  gql: Scalars['Boolean'];
  ts: Scalars['Boolean'];
  vsc: Scalars['Boolean'];
  aws: Scalars['Boolean'];
  level: Scalars['Float'];
  html_scores: Array<Scalars['Float']>;
  css_scores: Array<Scalars['Float']>;
  js_scores: Array<Scalars['Float']>;
  react_scores: Array<Scalars['Float']>;
  vue_scores: Array<Scalars['Float']>;
  gql_scores: Array<Scalars['Float']>;
  ts_scores: Array<Scalars['Float']>;
  vsc_scores: Array<Scalars['Float']>;
  aws_scores: Array<Scalars['Float']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  changePassword?: Maybe<User>;
  confirmUser: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  register: User;
  createUser: User;
  createQuizQuestion: QuizQuestion;
  addProfilePicture: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationCreateUserArgs = {
  data: RegisterInput;
};


export type MutationCreateQuizQuestionArgs = {
  data: QuizQuestionInput;
};


export type MutationAddProfilePictureArgs = {
  picture: Scalars['Upload'];
};

export type ChangePasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterInput = {
  userName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  profileImg: Scalars['String'];
  html: Scalars['Boolean'];
  css: Scalars['Boolean'];
  js: Scalars['Boolean'];
  react: Scalars['Boolean'];
  vue: Scalars['Boolean'];
  gql: Scalars['Boolean'];
  ts: Scalars['Boolean'];
  vsc: Scalars['Boolean'];
  aws: Scalars['Boolean'];
  level: Scalars['Float'];
  html_scores: Array<Scalars['Float']>;
  css_scores: Array<Scalars['Float']>;
  js_scores: Array<Scalars['Float']>;
  react_scores: Array<Scalars['Float']>;
  vue_scores: Array<Scalars['Float']>;
  gql_scores: Array<Scalars['Float']>;
  ts_scores: Array<Scalars['Float']>;
  vsc_scores: Array<Scalars['Float']>;
  aws_scores: Array<Scalars['Float']>;
};

export type QuizQuestionInput = {
  name: Scalars['String'];
};

export type QuizQuestion = {
   __typename?: 'QuizQuestion';
  id: Scalars['Float'];
  question: Scalars['String'];
  a: Scalars['Boolean'];
  b: Scalars['Boolean'];
  c: Scalars['Boolean'];
  d: Scalars['Boolean'];
};


export type ChangePasswordMutationVariables = {
  data: ChangePasswordInput;
};


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userName' | 'email'>
  )> }
);

export type ConfirmUserMutationVariables = {
  token: Scalars['String'];
};


export type ConfirmUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'confirmUser'>
);

export type ForgotPasswordMutationVariables = {
  email: Scalars['String'];
};


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userName' | 'email' | 'profileImg' | 'html' | 'css' | 'js' | 'react' | 'vue' | 'gql' | 'ts' | 'vsc' | 'aws' | 'level' | 'html_scores' | 'css_scores' | 'js_scores' | 'react_scores' | 'vue_scores' | 'gql_scores' | 'ts_scores' | 'vsc_scores' | 'aws_scores'>
  )> }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = {
  data: RegisterInput;
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userName' | 'email' | 'profileImg' | 'html' | 'css' | 'js' | 'react' | 'vue' | 'gql' | 'ts' | 'vsc' | 'aws' | 'level' | 'html_scores' | 'css_scores' | 'js_scores' | 'react_scores' | 'vue_scores' | 'gql_scores' | 'ts_scores' | 'vsc_scores' | 'aws_scores'>
  ) }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userName' | 'email' | 'profileImg' | 'html' | 'css' | 'js' | 'react' | 'vue' | 'gql' | 'ts' | 'vsc' | 'aws' | 'level' | 'html_scores' | 'css_scores' | 'js_scores' | 'react_scores' | 'vue_scores' | 'gql_scores' | 'ts_scores' | 'vsc_scores' | 'aws_scores'>
  )> }
);


export const ChangePasswordDocument = gql`
    mutation ChangePassword($data: ChangePasswordInput!) {
  changePassword(data: $data) {
    id
    userName
    email
  }
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;
export type ChangePasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ChangePasswordMutation, ChangePasswordMutationVariables>, 'mutation'>;

    export const ChangePasswordComponent = (props: ChangePasswordComponentProps) => (
      <ApolloReactComponents.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables> mutation={ChangePasswordDocument} {...props} />
    );
    
export type ChangePasswordProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>
    } & TChildProps;
export function withChangePassword<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
  ChangePasswordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ChangePasswordMutation, ChangePasswordMutationVariables, ChangePasswordProps<TChildProps, TDataName>>(ChangePasswordDocument, {
      alias: 'changePassword',
      ...operationOptions
    });
};
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ConfirmUserDocument = gql`
    mutation ConfirmUser($token: String!) {
  confirmUser(token: $token)
}
    `;
export type ConfirmUserMutationFn = ApolloReactCommon.MutationFunction<ConfirmUserMutation, ConfirmUserMutationVariables>;
export type ConfirmUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ConfirmUserMutation, ConfirmUserMutationVariables>, 'mutation'>;

    export const ConfirmUserComponent = (props: ConfirmUserComponentProps) => (
      <ApolloReactComponents.Mutation<ConfirmUserMutation, ConfirmUserMutationVariables> mutation={ConfirmUserDocument} {...props} />
    );
    
export type ConfirmUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ConfirmUserMutation, ConfirmUserMutationVariables>
    } & TChildProps;
export function withConfirmUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ConfirmUserMutation,
  ConfirmUserMutationVariables,
  ConfirmUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ConfirmUserMutation, ConfirmUserMutationVariables, ConfirmUserProps<TChildProps, TDataName>>(ConfirmUserDocument, {
      alias: 'confirmUser',
      ...operationOptions
    });
};
export type ConfirmUserMutationResult = ApolloReactCommon.MutationResult<ConfirmUserMutation>;
export type ConfirmUserMutationOptions = ApolloReactCommon.BaseMutationOptions<ConfirmUserMutation, ConfirmUserMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export type ForgotPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>, 'mutation'>;

    export const ForgotPasswordComponent = (props: ForgotPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables> mutation={ForgotPasswordDocument} {...props} />
    );
    
export type ForgotPasswordProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>
    } & TChildProps;
export function withForgotPassword<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables,
  ForgotPasswordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ForgotPasswordMutation, ForgotPasswordMutationVariables, ForgotPasswordProps<TChildProps, TDataName>>(ForgotPasswordDocument, {
      alias: 'forgotPassword',
      ...operationOptions
    });
};
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    userName
    email
    profileImg
    html
    css
    js
    react
    vue
    gql
    ts
    vsc
    aws
    level
    html_scores
    css_scores
    js_scores
    react_scores
    vue_scores
    gql_scores
    ts_scores
    vsc_scores
    aws_scores
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    
export type LogoutProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>
    } & TChildProps;
export function withLogout<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LogoutMutation,
  LogoutMutationVariables,
  LogoutProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LogoutMutation, LogoutMutationVariables, LogoutProps<TChildProps, TDataName>>(LogoutDocument, {
      alias: 'logout',
      ...operationOptions
    });
};
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    id
    userName
    email
    profileImg
    html
    css
    js
    react
    vue
    gql
    ts
    vsc
    aws
    level
    html_scores
    css_scores
    js_scores
    react_scores
    vue_scores
    gql_scores
    ts_scores
    vsc_scores
    aws_scores
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    
export type RegisterProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>
    } & TChildProps;
export function withRegister<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutation,
  RegisterMutationVariables,
  RegisterProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps, TDataName>>(RegisterDocument, {
      alias: 'register',
      ...operationOptions
    });
};
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    userName
    email
    profileImg
    html
    css
    js
    react
    vue
    gql
    ts
    vsc
    aws
    level
    html_scores
    css_scores
    js_scores
    react_scores
    vue_scores
    gql_scores
    ts_scores
    vsc_scores
    aws_scores
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    
export type MeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>
    } & TChildProps;
export function withMe<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MeQuery,
  MeQueryVariables,
  MeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps, TDataName>>(MeDocument, {
      alias: 'me',
      ...operationOptions
    });
};
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;