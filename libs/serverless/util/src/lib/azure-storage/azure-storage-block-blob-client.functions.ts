import { BlockBlobClient } from '@azure/storage-blob';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Logger } from '@nestjs/common';

import { AzureStorageType } from '@dark-rush-photography/serverless/types';
import { getAzureStorageContainerClient$ } from './azure-storage-container-client.functions';

export const getAzureStorageBlockBlobClient$ = (
  azureStorageConnectionString: string,
  azureStorageType: AzureStorageType,
  blobPath: string
): Observable<BlockBlobClient> =>
  getAzureStorageContainerClient$(
    azureStorageConnectionString,
    azureStorageType
  ).pipe(
    tap(() =>
      Logger.log(
        `Getting blob client for blob path ${blobPath}`,
        getAzureStorageBlockBlobClient$.name
      )
    ),
    map((containerClient) => containerClient.getBlockBlobClient(blobPath))
  );
