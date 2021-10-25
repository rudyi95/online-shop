declare type Nullable<T> = T | null;

declare type Maybe<T> = T | undefined;

declare interface RouteParams {
  id?: string;
  category?: string;
}

declare interface RouteProps {
  path: string
  component: ExoticComponent
  exact?: boolean
  name?: string
}