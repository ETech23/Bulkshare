// pages/groups.js
import { useState } from 'react';

export default function Groups() {
  const [groupName, setGroupName] = useState('');
  const [groupId, setGroupId] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600">Create or Join a Group</h1>

      <div className="mt-8 w-full max-w-sm">
        <h2 className="text-xl text-gray-800">Create a New Group</h2>
        <input
          type="text"
          placeholder="Group Name"
          className="w-full px-4 py-2 border rounded-md mt-4"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <button
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 mt-4"
          onClick={() => alert(`Group "${groupName}" created!`)}
        >
          Create Group
        </button>
      </div>

      <div className="mt-8 w-full max-w-sm">
        <h2 className="text-xl text-gray-800">Join an Existing Group</h2>
        <input
          type="text"
          placeholder="Group ID"
          className="w-full px-4 py-2 border rounded-md mt-4"
          value={groupId}
          onChange={(e) => setGroupId(e.target.value)}
        />
        <button
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 mt-4"
          onClick={() => alert(`Joined group with ID: ${groupId}`)}
        >
          Join Group
        </button>
      </div>
    </div>
  );
}
