/*
 * AvatarsCart.tsx
 * @desc: AvatarsCart component to display the selected avatar
 *
 * @param {name} string - The name of the avatar
 * @param {role} string - The role of the avatar
 * @param {avatar} string - The path to the avatar image
 *
 * @return: AvatarsCart component
 */
export default function AvatarsCart({ name, role, avatar }) {
    return (
        <div className="w-40 h-40 bg-[#ffffff2e] rounded">
            <span className="text-slate-100 font-bold text-lg flex justify-center">
                {name}
            </span>
            <span className="text-slate-100 font-light text-sm flex justify-center -mt-1">
                {role}
            </span>
            <div className="flex justify-center mt-2">
                <img className="h-24 w-24" src={avatar} />
            </div>
        </div>
    );
}
