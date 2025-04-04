"use client"

import { useSearchParams } from 'next/navigation';

import { useEffect } from 'react';

import { setUser } from '@/lib/features/user/userSlice';
import { useAppDispatch } from '@/lib/hooks';

import { axios_instance } from '@/utils/axios_instance';
import { errorToast } from '@/utils/toast';

type Props = {
  provider: string
}

const Code = (props: Props) => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";
  const dispatch = useAppDispatch()

  const verifyOAuthToken = async (INTEGERATION_TYPE: string, payload: { code: string }, callback: Function) => {
    try {
      const response = await axios_instance.post(
        `/oauth/${INTEGERATION_TYPE}/verify`,
        payload,
      );
      // handle failure
      if (![200, 201].includes(response?.status || response?.data?.status)) {
        errorToast(
          response?.data?.message ||
            "Failed to verify oauth token. Please try again.",
        );
      }

      // check for callback
      if (callback && typeof callback === "function") {
        callback(response?.data, null);
      }
    } catch (error) {
      callback(null, error);
    } finally {
      console.log(
        "Verify oauth token request completed. This message is displayed regardless of success or failure.",
      );
    }
  };

  useEffect(() => {
    verifyOAuthToken(props.provider, {
      code: code
    }, (res: any, err: any) => {
      if (err) {
        errorToast(err?.message)
        return;
      }
      dispatch(setUser(res?.data))
    })
  }, [])
  return (
    <div>{props.provider} {code}</div>
  )
}

export default Code