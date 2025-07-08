import { cookies } from 'next/headers'
import { runWithAmplifyServerContext } from '@/lib/amplifyServerUtils'
import { getCurrentUser } from 'aws-amplify/auth/server'
import { amplifyApi } from '@/lib/amplifyServerUtils'
import * as queries from '@/graphql/queries'

export type AuthSession = {
  userId: string
  email: string
  userName: string
  coach?: {
    id: string
    name: string
    lastName: string
    phoneNumber?: string
    email?: string
    bio?: string
    school?: string
    zipCode?: string
    address?: string
    state?: string
    city?: string
    country?: string
  }
}

export async function getSessionWithCoach(): Promise<AuthSession | null> {
  const user = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    async operation(ctx) {
      return getCurrentUser(ctx)
    },
  }).catch(() => null)

  if (!user) return null

  const userId = user.userId

  const result = await amplifyApi.graphql({
    query: queries.coachesByCognitoId,
    variables: { cognitoId: userId, limit: 1 },
  })

  const coach = result.data?.coachesByCognitoId?.items?.[0] ?? null

  return {
    userId,
    userName: user.username,
    email: user.signInDetails?.loginId ?? '',
    coach: coach && {
      id: coach.id,
      name: coach.name,
      lastName: coach.lastName,
      phoneNumber: coach.phoneNumber ?? undefined,
      email: coach.email ?? undefined,
      bio: coach.bio ?? undefined,
      school: coach.school ?? undefined,
      zipCode: coach.zipCode ?? undefined,
      address: coach.address ?? undefined,
      state: coach.state ?? undefined,
      city: coach.city ?? undefined,
      country: coach.country ?? undefined,
    },
  }
}