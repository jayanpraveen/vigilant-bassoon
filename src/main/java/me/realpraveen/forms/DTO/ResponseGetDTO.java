package me.realpraveen.forms.DTO;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ResponseGetDTO {

	private String title;
	private Map<String, String> questions;
	private List<HashMap<String, String>> response;

}