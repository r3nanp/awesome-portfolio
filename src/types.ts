export interface IAPIUser {
  login: string
  name: string
}

export interface IAPIRepos {
  name: string
  owner: {
    login: string
  }
}