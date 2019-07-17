/*!
 * git-pull-latest <https://github.com/nivrith/git-pull-latest>
 *
 * Copyright (c) Nivrith
 * Licensed under the MIT License.
 */

import Git, {
  Repository, Oid
} from 'nodegit';


export async function gitPullLatest( target: string, branchName: string = 'master', remoteBranch?: string ): Promise < Oid > {
  let repository: Repository;
    repository = await Git.Repository.open( target );
    await repository.fetchAll( {
      credentials: function ( url: string, userName: string ) {
        return Git.Cred.sshKeyFromAgent( userName );
      }
    });
    return repository.mergeBranches( branchName, remoteBranch || `origin/${branchName}` );
}

export default gitPullLatest;
