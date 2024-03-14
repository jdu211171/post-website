import {MailDisplay} from "@/components/mail-display.tsx";
import {useParams} from "react-router-dom";
import {useState} from "react";
// import {useLoaderData, useParams} from "react-router-dom";
// import {getPosts} from "@/lib/post.ts";

function Post() {
    // console.log('postId')
    // // @ts-ignore
    // const {post} = useLoaderData()
    const post = {
        "id": 191,
        "content": "高級腕時計を持ち主から預かり、使いたい人にレンタルする「トケマッチ」というサービスが、ことし1月に突然終了し、多数の腕時計が持ち主に返還されないままになっていた問題で、警視庁が、サービスを運営していた会社の42歳の元代表の逮捕状を取り、指名手配したことが分かりました。元代表は預かった時計の一部を売却していたとみられ、現在は海外に出国しているということです。「トケマッチ」は、ロレックスなどの高級腕時計を持ち主から預かって使いたい人にレンタルし、預けた人も腕時計のランクに応じた月額の預託料を受け取ることができるというサービスです。大阪にあった運営会社「ネオリバース」がことし1月末、ホームページで突然、会社の解散とサービスの終了を発表し、利用者から「預けていた腕時計が戻ってこない」と被害の訴えが相次いでいました。東京や大阪など、全国13都府県の警察が、時計を預けた40人以上から被害届を受理して捜査に乗り出していましたが、このうち警視庁が、ネオリバースの元代表、小湊こと福原敬済容疑者（42）の逮捕状を取り、業務上横領容疑で指名手配したことが警視庁への取材で分かりました。警視庁は、これまでに27人から高級腕時計、およそ70本、総額にして1億円相当の被害届を受理しています。警視庁によりますと、福原元代表は顧客から預かった高級腕時計のロレックス1本をことし1月、大阪の古物商に65万円で売却した疑いが持たれていて、その後、海外に出国したということで、警視庁は今後、ICPO＝国際刑事警察機構を通じて国際手配する方針です。",
        "created_at": "2024-03-06 05:30:36",
        "updated_at": null,
        "user_id": 48,
        "username": "今日のニュース",
        "comment_count": 0,
        "reaction_count": 0,
        "liked_status": 0
    }
    // const [post, setPost] = useState(post)
    // const {postId} = useParams()
    return (
        // <MailDisplay mail={post}/>
        <p>Hello, {JSON.stringify(post)}</p>
    );
}

export async function loader() {
    // const posts = await getPosts()
    // const post = posts.find((post: { id: number; }) => post.id === Number(postId))
    const post = 13
    return {post}
}

export default Post;