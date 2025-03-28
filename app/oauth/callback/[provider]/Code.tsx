"use client"

import { useSearchParams } from 'next/navigation';

type Props = {}

const Code = (props: Props) => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  return (
    <div>code {code}</div>
  )
}

export default Code