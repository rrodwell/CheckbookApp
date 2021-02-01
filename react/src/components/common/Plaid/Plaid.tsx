import React, { useCallback } from 'react'
import { usePlaidLink } from 'react-plaid-link'
import Button from '@material-ui/core/Button'

interface PlaidLinkOptions {
  clientName: string
  env: string
  product: string[]
  token: string
  onSuccess: Function
  onExit?: Function
  onLoad?: Function
  onEvent?: Function
  receivedRedirectUri?: string
}

export default function Plaid() {
  const onSuccess = useCallback((token, metadata) => {
    console.log({ token, metadata })
  }, [])

  const config: PlaidLinkOptions = {
    clientName: 'Simple',
    env: 'sandbox',
    product: ['auth', 'transactions'],
    token: 'link-sandbox-<TOKEN>',
    onSuccess
  }

  const { open, ready } = usePlaidLink(config)

  return (
    <Button variant='contained' color='primary' onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </Button>
  )
}
