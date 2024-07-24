import './AvatarGroup.css'; // Import the CSS file

const AvatarGroup = () => {
  const avatars = [
    { src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { src: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/04/a0004213/img/basic/a0004213_main.jpg?20200710184501&q=80&rw=750&rh=536" },
  ];

  return (
    <div className="avatar-group">
      {avatars.length >2 && (
        <div className="hidden-avatars">
          +{avatars.length - 2}
        </div>
      )}

      {avatars.slice(0, 2).map((avatar, index) => (
        <div
          key={index}
          className="avatar"
        >
          <img
            src={avatar.src}
            alt={`Avatar ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
