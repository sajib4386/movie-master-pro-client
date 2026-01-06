import React, { useState } from "react"
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUser, setUser } = useAuth();

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUser({
        displayName: name,
        photoURL: photo,
      });

      setUser({
        ...user,
        displayName: name,
        photoURL: photo,
      });

      toast.success("Profile Updated Successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-base-200 p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-red-500 dark:text-yellow-400 mb-6">
          My Profile
        </h2>

        {/* Profile View */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.photoURL}
            alt=""
            className="w-28 h-28 rounded-full border-4 border-red-500 mb-3"
          />
          <h3 className="text-xl font-semibold">{user?.displayName}</h3>
          <p className="text-sm text-gray-100">{user?.email}</p>
        </div>

        {/* Editable Form */}
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Photo URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full text-white"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
