import { useSelector } from 'react-redux'
import { ReduxState } from '../types'
import { Resource } from '@zup-it/redux-resource'

function useResource<T> (resourceName: keyof ReduxState): Resource<T> {
  return useSelector((state: ReduxState) => state[resourceName])
}

export default useResource
