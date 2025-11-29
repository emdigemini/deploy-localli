import { SideCards } from "../../components/Header/SideCards";
import { useEffect, useRef } from "react"

export function MessagePage(){
  const messagesEndRef = useRef(null);

  const startToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  }

  useEffect(() => {
    startToBottom();
  }, []);

  return (
    <div className="left-side">
      <SideCards />
      <div className="message-container">

        <div className="sidebar">
          <div className="tabs">
            <div className="tab"
              style={{ 
                background: "#4993fb",
                color: "#FFF"
               }}
            >All</div>
            <div className="tab">Unread</div>
            <div className="tab">Groups</div>
            <div className="tab">Spam</div>
          </div>

          {/**Chat Lists */}
          <div className="chat-lists">

            <div className="chat-item active">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend Name</div>
                <div className="chat-preview">pre pautang muna limang libo balik ko din sa next week…</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Client Name</div>
                <div className="chat-preview">Good morning sir, I hope you're doing well...</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend2 Name</div>
                <div className="chat-preview">boi, patulong ako sa ginagawa ko…</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend Name</div>
                <div className="chat-preview">pre pautang muna limang libo balik ko din sa next week…</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Client Name</div>
                <div className="chat-preview">Good morning sir, I hope you're doing well...</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend2 Name</div>
                <div className="chat-preview">boi, patulong ako sa ginagawa ko…</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend Name</div>
                <div className="chat-preview">pre pautang muna limang libo balik ko din sa next week…</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Client Name</div>
                <div className="chat-preview">Good morning sir, I hope you're doing well...</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend2 Name</div>
                <div className="chat-preview">boi, patulong ako sa ginagawa ko…</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend Name</div>
                <div className="chat-preview">pre pautang muna limang libo balik ko din sa next week…</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Client Name</div>
                <div className="chat-preview">Good morning sir, I hope you're doing well...</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend2 Name</div>
                <div className="chat-preview">boi, patulong ako sa ginagawa ko…</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend Name</div>
                <div className="chat-preview">pre pautang muna limang libo balik ko din sa next week…</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Client Name</div>
                <div className="chat-preview">Good morning sir, I hope you're doing well...</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend2 Name</div>
                <div className="chat-preview">boi, patulong ako sa ginagawa ko…</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend Name</div>
                <div className="chat-preview">pre pautang muna limang libo balik ko din sa next week…</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Client Name</div>
                <div className="chat-preview">Good morning sir, I hope you're doing well...</div>
              </div>
            </div>

            <div className="chat-item">
              <div className="avatar"></div>
              <div className="chat-info">
                <div className="chat-name">Friend2 Name</div>
                <div className="chat-preview">boi, patulong ako sa ginagawa ko…</div>
              </div>
            </div>
            
          </div>

        </div>

        <div className="chat-window">
          <div className="chat-header">Friend Name</div>

          <div className="messages">

            <div className="other-message">
              <div className="profile"></div>
              <div className="bubble">
                Siyempre, usap din tayo sa rate mo, kahit alam kong 'di mo kailangan 'yan, pero bigayan na lang natin.
              </div>
            </div>

            <div className="your-message">
              <div className="you">
                Ayos pre, salamat sa trust! Ano bang project niyo? Mukhang mahirap yan ah, pero g ako!
              </div>
              <div className="profile"></div>
            </div>

            <div className="other-message">
              <div className="profile"></div>
              <div className="bubble">
                Web app siya for our team. Alam mo na... pang-masa, may dashboard, notifs, at reports. Kailangan lang ikaw talaga mag-set ng standard. Medyo complex pero ikaw lang makakagawa nito ng mabilis at malinis.
              </div>
            </div>

            <div className="your-message">
              <div className="you">
                Ah ganun ba, nice. Sige, excited na ako. Anong tech stack niyo gagamit? 
              </div>
              <div className="profile"></div>
            </div>

            <div className="other-message">
              <div className="profile"></div>
              <div className="bubble">
                React sa frontend, Node/Express sa backend, Postgres sa DB. Pwede rin TS at Tailwind para malinis na malinis tulad ng gawa mo.
              </div>
            </div>

            <div className="your-message">
              <div className="you">
                Ayos, swak na swak sa akin yan. Walang problema. 
              </div>
              <div className="profile"></div>
            </div>

            <div className="other-message">
              <div className="profile"></div>
              <div className="bubble">
                Kung game ka, usap tayo sa rate mo. Kahit ano basta komportable ka. Pwede daily/hourly, pero mas okay siguro kung flat project rate para ma-manage mo oras mo, alam kong busy ka.
              </div>
            </div>

            <div className="your-message">
              <div className="you">
                Mas ok sa akin flat rate muna. Pero gusto ko makita tasks para ma-estimate ko nang tama. Para fair sa atin pareho.
              </div>
              <div className="profile"></div>
            </div>

            <div className="other-message">
              <div className="profile"></div>
              <div className="bubble">
                Oo, gagawa kami ng breakdown ng features + timeline tapos ipapadala sa'yo. Huwag kang mag-alala, sayang ang talent mo kung di natin magagamit nang buo dito.
              </div>
            </div>

            <div className="other-message">
              <div className="profile"></div>
              <div className="bubble">
                Kapag ready ka na, simulan na natin repo setup at assign tasks. Isa kang alamat boi!
              </div>
            </div>

            <div className="your-message">
              <div className="you">
                Sounds good! Excited na akong simulan.
              </div>
              <div className="profile"></div>
            </div>
            
            <div className="message-timestamp">
              <span>Nov 19, 2025, 6:45 PM</span>
              <div className="other-message">
                <div className="profile"></div>
                <div className="bubble">
                  pre pautang muna limang libo balik ko din sa next week…
                </div>
              </div>
            </div>
            
          <div ref={messagesEndRef}></div>
          </div>

          <div className="input-area">
            <input className="input-box" type="text" placeholder="Write a message..." />
            <button className="send-btn">➤</button>
          </div>
        </div>

      </div>
    </div>
  )
}