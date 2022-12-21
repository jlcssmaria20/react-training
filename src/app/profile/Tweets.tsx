import { trpcHook } from '@utils/trpcHook'

const Tweets = (tweets) => {
  
  return (
    <div className="mt-2 border-b mb-4">
        <div className="flex">
            <div>
                <img className="w-12 rounded-full" src="https://pbs.twimg.com/profile_images/1111915116579086336/HKxtnLsO_reasonably_small.jpg" />
            </div>

            <div className="ml-4">
                <p>
                <span className="font-bold">{tweets.user.firstname + tweets.user.lastname}</span> <span className="text-gray-500">@{tweets.user.username}</span>
                </p>

                <p>
                {tweets.description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Tweets
