import React from 'react';
import Movie from './Movie';


export default class MovieList extends React.Component {

  render() {
    return (
      <div className='movieList container'>
        <Movie {...
          {id: 1,
          key: 1,
          title: 'Beauty and the Beast',
          ratingImage:<h4>'Rated G'</h4>,
          summary:<h3>"An arrogant young prince (Robby Benson) and his castle's servants fall under the spell of a wicked enchantress, who turns him into the hideous Beast until he learns to love and be loved in return."</h3>,
          released: '1991',
          image: 'https://i5.walmartimages.com/asr/f44a28c7-dce8-4125-a646-0babb859a87c_1.2c0184b24b151e20d88fc07d9665b9ec.jpeg?odnHeight=500&odnWidth=300&odnBg=FFFFFF' }
        } />
        <Movie {...
          {id: 2,
          key: 2,
          title: 'Harry Potter and the Sorcerers Stone',
          ratingImage:<h4>'Rated PG'</h4>,
          summary: <h3>"Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths."</h3>,
          released: '2001',
          image: 'https://i5.walmartimages.com/asr/94431e98-0bd1-418f-abf6-5e7414f0807b_1.38330dc297cb09443b426ebb52a648e1.jpeg?odnHeight=500&odnWidth=300&odnBg=FFFFFF'}
        } />
        <Movie {...
          {id: 3,
          key: 3,
          title: 'Halloween',
          ratingImage:<h4>'Rated R'</h4>, 
          summary: <h3>"On a cold Halloween night in 1963, six year old Michael Myers brutally murdered his 17-year-old sister, Judith. He was sentenced and locked away for 15 years. But on October 30, 1978, while being transferred for a court date, a 21-year-old Michael Myers steals a car and escapes Smith's Grove. He returns to his quiet hometown of Haddonfield, Illinois, where he looks for his next victims."</h3>,
          release: '1978',
          image: 'https://i5.walmartimages.com/asr/0fc4036e-2b9d-4204-834e-62993ec3da50.4fddb85e3b2852563ce6ab71384e4dcd.jpeg?odnHeight=500&odnWidth=300&odnBg=FFFFFF'}
        } />
        <Movie {...
          {id: 4,
          key: 4,
          title: 'Step Brothers',
          ratingImage:<h4>'Rated R'</h4>,
          summary: <h3>"Brennan Huff (Will Ferrell) and Dale Doback (John C. Reilly) have one thing in common: they are both lazy, unemployed leeches who still live with their parents. When Brennan's mother and Dale's father marry and move in together, it turns the overgrown boys' world upside down. Their insane rivalry and narcissism pull the new family apart, forcing them to work together to reunite their parents."</h3>,
          released: '2008',
          image: 'https://i5.walmartimages.com/asr/0cbb06a8-ef56-44ae-9ef4-087936ef2704.647a86fe2cd6aee5406f06555762538b.jpeg?odnHeight=500&odnWidth=300&odnBg=FFFFFF'}
        } />
        <Movie {...
          {id: 5,
          key: 5,
          title: 'Hocus Pocus',
          ratingImage:<h4>'Rated PG'</h4>,
          summary: <h3>"After moving to Salem, Mass., teenager Max Dennison (Omri Katz) explores an abandoned house with his sister Dani (Thora Birch) and their new friend, Allison (Vinessa Shaw). After dismissing a story Allison tells as superstitious, Max accidentally frees a coven of evil witches (Bette Midler, Sarah Jessica Parker, Kathy Najimy) who used to live in the house. Now, with the help of a magical cat, the kids must steal the witches' book of spells to stop them from becoming immortal."</h3>,
          released: '1993',
          image: 'https://i5.walmartimages.com/asr/be7f92a2-882b-460c-a35c-f9447d9632fd_1.97e01368901f0f6df6abc6601ed5c4c3.jpeg?odnHeight=500&odnWidth=300&odnBg=FFFFFF'}
        }/>

      </div>
      
    );
  }
}