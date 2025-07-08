'use client';

import { config } from '@/amplifyconfiguration';
import { Amplify } from 'aws-amplify';
import 'aws-amplify/auth/enable-oauth-listener';

export default function AmplifyConfig() {
  Amplify.configure(config, { ssr: true });

  return null;
}
