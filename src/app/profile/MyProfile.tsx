import { trpcHook } from '@utils/trpcHook'

const MyProfile: React.FC = (postList) => {
  
  return (
    <div>
        <div className="ml-3">
      <p className="font-bold text-lg">{postList.user.firstname + postList.user.lastname}</p>
      <p className="text-gray-500">{postList.user.username}</p>
    </div>
    
    <div className="px-3 mt-3">
      <p>Bio</p>
    </div>
    
    <div className="px-3 flex mt-3">
      <div className="flex items-center">
        <i className="fas fa-map-marker-alt"></i>
        <p className="ml-2">{postList.user.address}</p>
      </div>
      
      <div className="flex items-center ml-3">
        <i className="fas fa-calendar-alt"></i>
        <p className="ml-2">{postList.user.joinedDate}</p>
      </div>
    </div>
    
    <div className="px-3 mt-3 flex">
      <p className="cursor-pointer hover:underline"><span className="font-bold">{postList.user.followersCount}</span> Following</p>
      <p className="ml-5 cursor-pointer hover:underline"><span className="font-bold">{postList.user.followingCount}</span> Following</p>
    </div>
    </div>
  )
}

export default MyProfile
