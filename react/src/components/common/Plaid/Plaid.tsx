import React, { useCallback } from 'react'
import { usePlaidLink } from 'react-plaid-link'

interface PlaidLinkOptions {
  token: string;
  onSuccess: Function;
  onExit?: Function;
  onLoad?: Function;
  onEvent?: Function;
  receivedRedirectUri?: string;
}

export default function Plaid() {
  const onSuccess = useCallback((token, metadata) => {
    // send token to server
  }, [])

  const config: PlaidLinkOptions = {
    token: '<GENERATED_LINK_TOKEN>',
    onSuccess
  }

  const { open, ready, error } = usePlaidLink(config)

  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  )
}
