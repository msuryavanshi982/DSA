// GFG :  print linkedlist element;=>

function display(head){
    var curr=head;
    while(curr!=null){
        console.log(curr.data);
        curr=curr.next;
    }
    var last =head;
    while(last.next!=null){
        last=last.next;
    }
}

//=============================>>>
class Solution {
    display(head){
      //code here
      
          let out=[]
      let curr= head
      while(curr!=null){
          out.push(curr.data)
          curr=curr.next
      }
      console.log(out.join(" "))
    }
  
    }
  let res= new Solution()
  return res

  //=======================>>>

  let str=""
    let curr= head
    
    while(curr!=null){
        str+=curr.data+" "
        // out.push(curr.data)
        curr=curr.next
    }
     console.log(str)
