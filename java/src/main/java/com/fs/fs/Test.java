package com.fs.fs;

import java.util.*;
import org.atpfivt.ljv.LJV;

class Test{
	
	public static void main(String[] args){
		Map<Integer, String> map = new LinkedHashMap<>();
		map.put(1, "abc");
		map.put(2, "def");
		map.put(3, "ghi");
		System.out.println(new LJV()
			.setTreatAsPrimitive(Integer.class)
			.setTreatAsPrimitive(String.class)
			.drawGraph(map));
	}

}