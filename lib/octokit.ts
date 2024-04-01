import { Octokit } from "octokit";

export const octokit = new Octokit({ auth: process.env.SECRET_GITHUB_TOKEN });
